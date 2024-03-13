exports.command = function () {
  const self = this;
  this.elements('css selector', '.set', function (result) {
    const totalActivities = result.value.length;

    for (let i = 1; i <= totalActivities; i++) {
      const selector = `.set:nth-child(${i})`;

      self.waitForElementVisible(selector, 20000)
        .assert.visible(selector, `Activity ${i} is visible.`);
    }
  });

  return this;
};