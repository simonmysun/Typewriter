const Typewriter = function (srcElement, cfg) {
  const self = this;
  let timeIntervalHandler = null;
  const defaultConfig = {
    interval: 30,
    skipMathJax: true,
    mathShock: 0,
    hook(x, queue) {
      return true;
    }
  };

  self.config = Object.assign(defaultConfig, cfg);
  self.processQueue = [];

  const newElement = document.createElement('div');

  newElement.innerHTML = ' ';

  let travelNode = srcElement.firstChild;
  let targetNode = newElement.firstChild;

  while (true) {
    if (self.config.skipMathJax &&
        travelNode.nodeType === 1 &&
        travelNode.className.indexOf('MathJax') !== -1) {
      self.processQueue.push({
        type: 'Node',
        data: travelNode.cloneNode(true)
      });
      if (travelNode.className.indexOf('MathJax_Preview') === -1) {
        for (let i = 0; i < self.config.mathShock; i += 1) {
          self.processQueue.push({
            type: 'Wait',
            data: null
          });
        }
      }
    } else {
      self.processQueue.push({
        type: 'Node',
        data: travelNode.cloneNode(false)
      });
    }

    if (travelNode.childNodes.length > 0 &&
        (!self.config.skipMathJax ||
         travelNode.className.indexOf('MathJax') === -1)) {
      self.processQueue.push({
        type: 'Operation',
        data: 'in'
      });
      travelNode = travelNode.firstChild;
      continue;
    }
    if (travelNode.nextSibling !== null) {
      travelNode = travelNode.nextSibling;
      continue;
    }

    self.processQueue.push({
      type: 'Operation',
      data: 'out'
    });
    travelNode = travelNode.parentNode;
    while (travelNode.nextSibling === null) {
      self.processQueue.push({
        type: 'Operation',
        data: 'out'
      });
      travelNode = travelNode.parentNode;
    }

    if (travelNode.isEqualNode(srcElement)) {
      break;
    }
    travelNode = travelNode.nextSibling;
  }

  srcElement.parentNode.insertBefore(newElement, srcElement.nextSibling);
  srcElement.parentNode.removeChild(srcElement);

  const animateText = function (srcNode) {
    const len = srcNode.nodeValue.length;
    const newNode = srcNode.cloneNode(false);

    newNode.nodeValue = '';
    for (let i = 0; i < len; i += 1) {
      self.processQueue.unshift({
        type: 'Update',
        data: srcNode
      });
    }
    return newNode;
  };

  const process = function () {
    if (self.processQueue.length === 0) {
      self.pause();
    }
    let op = self.processQueue.shift();

    if (!self.config.hook(op)) {
      return;
    }
    if (op.type === 'Operation') {
      if (op.data === 'in') {
        const nxtOp = self.processQueue.shift();

        targetNode.appendChild(nxtOp.data.nodeType === 3 ?
          animateText(nxtOp.data) :
          nxtOp.data);
        targetNode = targetNode.firstChild;
      } else {
        targetNode = targetNode.parentNode;
      }
    } else if (op.type === 'Node') {
      if (op.data.nodeType === 3) {
        targetNode.parentNode.appendChild(animateText(op.data));
      } else {
        targetNode.parentNode.appendChild(op.data);
      }
      targetNode = targetNode.nextSibling;
    } else if (op.type === 'Update') {
      if (op.data.nodeValue.length > targetNode.nodeValue.length) {
        targetNode.nodeValue += op.data.nodeValue[targetNode.nodeValue.length];
      }
    } else if (op.type === 'Wait') {
    }
  };

  self.start = function () {
    timeIntervalHandler = setInterval(process, self.config.interval);
  };
  self.pause = function () {
    clearInterval(timeIntervalHandler);
  };
  self.resume = self.start;
};

export default Typewriter;
