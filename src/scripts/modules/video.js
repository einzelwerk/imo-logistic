import classNames from '../utils/classNames';

export default function isVideo() {
  const classBlock = classNames.videoBlock.block;
  const classBtn = classNames.videoBlock.btn;
  const classVideo = classNames.videoBlock.video;
  const classPlayed = classNames.videoBlock.played;

  const videoBlock = document.querySelector(`.${classBlock}`);
  if (!videoBlock) return;

  const videoBtn = videoBlock.querySelector(`.${classBtn}`);
  const video = videoBlock.querySelector(`.${classVideo}`);

  videoBlock.style.height = `${videoBlock.scrollHeight}px`;

  videoBtn.addEventListener('click', () => {
    videoBlock.classList.add(classPlayed);
    video.play();
    video.setAttribute('controls', 'controls');
    videoBtn.classList.add('visually-hidden');
  });

  video.onplay = () => {
    videoBlock.classList.add(classPlayed);
    video.play();
    video.setAttribute('controls', 'controls');
    videoBtn.classList.add('visually-hidden');
  };

  video.onpause = () => {
    setTimeout(() => {
      if (!video.paused) return;
      videoBlock.classList.remove(classPlayed);
      video.removeAttribute('controls');
      videoBtn.classList.remove('visually-hidden');
    }, 200);
  };
}
