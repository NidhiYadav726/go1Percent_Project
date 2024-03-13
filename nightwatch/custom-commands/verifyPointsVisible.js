exports.command = function () {
  const self = this;
  this.elements('css selector', '.px-2.feed-points', function () {
    const totalActivities = 1;

    for (let i = 1; i <= totalActivities; i++) {
      const selector = `.px-2.feed-points:nth-child(${i})`;

      self.waitForElementVisible(selector, 20000)
        .assert.visible(selector, `Activity Points ${i} is visible.`);
    }
  });

  return this;
};
