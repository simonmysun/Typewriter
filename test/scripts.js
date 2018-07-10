var tw;
var $init = document.getElementById('init');
var $init_skip_maths = document.getElementById('init-skip-maths')
var $start = document.getElementById('start');
var $pause = document.getElementById('pause');
var $resume = document.getElementById('resume');
var $reset = document.getElementById('reset');
$init.style.display = 'block';
$init_skip_maths.style.display = 'block';
$start.style.display = 'none';
$pause.style.display = 'none';
$resume.style.display = 'none';
$reset.style.display = 'none';

document.getElementById('init').addEventListener('click', function(event) {
  tw = new Typewriter(document.getElementById('test'));
  $init.style.display = 'none';
  $init_skip_maths.style.display = 'none';
  $start.style.display = 'block';
  $pause.style.display = 'block';
  $resume.style.display = 'block';
  $reset.style.display = 'block';
  event.preventDefault();
  return false;
});

document.getElementById('init-skip-maths').addEventListener('click', function(event) {
  tw = new Typewriter(document.getElementById('test'), {
    skip: '.MathJax',
    hook: function(x, queue) {
      if(x.type === 'Node' && x.nodeType === 1 && x.data.matches('.MathJax_Preview')) {
        for(var i = 0; i < 10; i += 1) {
          queue.push({
            type: 'Wait',
            data: null
          });
        }
      }
      return true;
    }
  });

  $init.style.display = 'none';
  $init_skip_maths.style.display = 'none';
  $start.style.display = 'block';
  $pause.style.display = 'block';
  $resume.style.display = 'block';
  $reset.style.display = 'block';
  event.preventDefault();
  return false;
});

document.getElementById('start').addEventListener('click', function(event) {
  tw.start();
  event.preventDefault();
  return false;
});

document.getElementById('pause').addEventListener('click', function(event) {
  tw.pause();
  event.preventDefault();
  return false;
});

document.getElementById('resume').addEventListener('click', function(event) {
  tw.resume();
  event.preventDefault();
  return false;
});

document.getElementById('reset').addEventListener('click', function(event) {
  tw = tw.reset();
  event.preventDefault();
  return false;
});

