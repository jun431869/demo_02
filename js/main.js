// 獎金累計
$(function () {
	$(".count").hide(0).fadeIn(2000);
	$(".count").each(function () {
		var $this = $(this),
			countTo = $this.attr("data-count");
		$({ countNum: $this.text() }).animate(
			{
				countNum: countTo
			},
			{
				duration: 2800,
				easing: "linear",
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(
						this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					);
				}
			}
		);
	});
});

$(function () {
	$(".member-count").hide(0).fadeIn(2000);
	$(".member-count").each(function () {
		var $this = $(this),
			countTo = $this.attr("data-member-count");
		$({ countNum: $this.text() }).animate(
			{
				countNum: countTo
			},
			{
				duration: 2800,
				easing: "linear",
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(
						this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					);
				}
			}
		);
	});
});
