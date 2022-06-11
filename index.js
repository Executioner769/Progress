const progress = $("#progress");
const prev = $("#prev");
const next = $("#next");
const items = $(".progress-item");

let currentActive = 1;

// click on next
next.click(() => {
    if (currentActive < items.length) {
        currentActive++;
    }
    updateDOM();
});

// click on prev
prev.click(() => {
    if (currentActive > 1) {
        currentActive--;
    }
    updateDOM();
});

function updateDOM() {
    // remove active class from all items less than currentActive
    items.each((index, item) => {
        if (index < currentActive) {
            $(item).addClass("active");
        } else {
            $(item).removeClass("active");
        }
    });

    const actives = $(".active");

    // Set the progress bar width
    progress.css(
        "width",
        `${((actives.length - 1) / (items.length - 1)) * 100}%`
    );

    // Disable prev button if currentActive is 1
    if (currentActive === 1) {
        prev.attr("disabled", true);
    }

    // Disable next button if currentActive is last item
    if (currentActive === items.length) {
        next.attr("disabled", true);
    }

    // Enable prev button and next button if currentActive is not 1 or last item
    if (currentActive > 1 && currentActive < items.length) {
        prev.attr("disabled", false);
        next.attr("disabled", false);
    }
}
