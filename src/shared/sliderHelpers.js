import { getDateAccordingToMonth } from './generalUtils';

const getSlideDate = ({ parent, isInitialActiveChild, activeDate, monthChangeDirection, key, isAnimate }) => {
  if (key !== undefined) {
    if (!parent) {
      return isInitialActiveChild ? activeDate : getDateAccordingToMonth(activeDate, key === 0 ? 'PREVIOUS' : 'NEXT');
    }
    if (isAnimate) {
      const weight = monthChangeDirection === 'NEXT' ? 0 : 2;
      if (key === weight) return activeDate;
      if (key === 1) return getDateAccordingToMonth(activeDate, monthChangeDirection);
      if (key === (2 - weight)) return getDateAccordingToMonth(activeDate, monthChangeDirection, 2);
    }
    console.log(activeDate);
    return isInitialActiveChild ? activeDate : getDateAccordingToMonth(activeDate, monthChangeDirection === 'NEXT' ? key === 0 ? 'PREVIIOUS' : 'NEXT' : key === 0 ? 'PREVIOUS' : 'NEXT');
  }
  if (!parent) {
    return isInitialActiveChild ? activeDate : getDateAccordingToMonth(activeDate, 'NEXT');
  }
  const child = parent.children[isInitialActiveChild ? 0 : 1];
  const isActiveSlide =
    child.classList.contains('-shown') || child.classList.contains('-shownAnimated'); // check -shownAnimated for Safari bug
  return isActiveSlide ? activeDate : getDateAccordingToMonth(activeDate, monthChangeDirection);
};

const animateContent = ({ parent, direction, type }) => {
  const wrapperChildren = Array.from(parent.children);
  const shownItem = wrapperChildren.find(child => child.classList.contains('-shown'));

  if (type === 'month') {
    const hiddenItem = wrapperChildren.filter(child => child !== shownItem);
    const getAnimationClass = value => (value ? '-r' : '-l');
    const isNextMonth = direction === 'NEXT';
    shownItem.style.transition = '';
    shownItem.classList.add(getAnimationClass(isNextMonth));
    hiddenItem.forEach((n) => n.classList.add(getAnimationClass(isNextMonth)));
    wrapperChildren.forEach(item => item.classList.add('-shownAnimated'));
    return;
  }

  const hiddenItem = wrapperChildren.find(child => child !== shownItem);
  const baseClass = shownItem.classList[0];
  const isNextMonth = direction === 'NEXT';
  const getAnimationClass = value => (value ? '-hiddenNext' : '-hiddenPrevious');
  hiddenItem.style.transition = 'none';
  shownItem.style.transition = '';
  shownItem.className = `${baseClass} ${getAnimationClass(!isNextMonth)}`;
  hiddenItem.className = `${baseClass} ${getAnimationClass(isNextMonth)}`;
  hiddenItem.classList.add('-shownAnimated');
};

const handleSlideAnimationEnd = ({ target, key }) => {
  if (key !== 1 && key !== undefined) {
    target.classList.remove('-shownAnimated');
    target.classList.remove('-r');
    target.classList.remove('-l');
    return;
  }
  target.classList.remove('-r');
  target.classList.remove('-l');
  target.classList.remove('-hiddenNext');
  target.classList.remove('-hiddenPrevious');
  target.classList.replace('-shownAnimated', '-shown');
};

export { animateContent, getSlideDate, handleSlideAnimationEnd };
