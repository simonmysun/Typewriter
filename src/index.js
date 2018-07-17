const Typewriter = function (srcElement, cfg = {}) {
  const self = this;
  let timeIntervalHandler = null;
  const defaultConfig = {
    interval: 30,
    skip: ':not(*)',
    hook(x, queue) {
      return true;
    }
  };

  self.config = Object.assign(defaultConfig, cfg);
  self.processQueue = [];

  const newElement = document.createElement(srcElement.nodeName);

  newElement.innerHTML = ' ';

  let travelNode = srcElement.firstChild;
  let targetNode = newElement.firstChild;

  while (true) {
    if (travelNode.nodeType === 1 && travelNode.matches(self.config.skip)) {
      self.processQueue.push({
        type: 'Node',
        data: travelNode.cloneNode(true)
      });
    } else {
      self.processQueue.push({
        type: 'Node',
        data: travelNode.cloneNode(false)
      });
    }
    if (travelNode.nodeName === 'SCRIPT') { // Skip scripts to avoid being called multiple times.
      self.processQueue.pop();
    } else if (travelNode.childNodes.length > 0 &&
        !travelNode.matches(self.config.skip)) {
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

    while (travelNode.nextSibling === null && !travelNode.isEqualNode(srcElement)) {
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

  srcElement.parentNode.insertBefore(newElement, srcElement);
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
      return;
    }
    let op = self.processQueue.shift();

    if (!self.config.hook(op, self.processQueue)) {
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
    if (timeIntervalHandler === null) {
      timeIntervalHandler = setInterval(process, self.config.interval);
    }
  };
  self.pause = function () {
    clearInterval(timeIntervalHandler);
    timeIntervalHandler = null;
  };
  self.resume = self.start;
  self.reset = function () {
    self.pause();
    while (self.processQueue.length > 0) {
      process();
    }
    return new Typewriter(newElement, Object.assign({}, self.config));
  };
};

export default Typewriter;
