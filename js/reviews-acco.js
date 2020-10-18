const getSizeOfBlock = block => block.height();

const openItem = item => {
  const textBlock = item.find(".team__content-block");
  const reqHeight = getSizeOfBlock(textBlock);
  const textContainer = item.find(".team__content");

  item.addClass("active");
  textContainer.height(reqHeight);
};

const closeEveryItem = container => {
  const items = container.find(".team__item");
  const textBlocks = container.find(".team__content");

  items.removeClass("active");
  textBlocks.height(0);
};

$(".team__item").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const itemOpened = $this.hasClass("active");
  const container = $this.closest(".team");
  
  if (itemOpened) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container)
    openItem($this);
  }
});
