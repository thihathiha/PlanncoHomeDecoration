$(document).ready(function(){

	// Start Header

	// Start Nav
		$(".navbuttons").click(function(){
			$(".navbuttons").toggleClass("crossxs");
		});

		$(window).scroll(function(){
			let getscrolltop = $(this).scrollTop();
			// console.log(getscrolltop);

			if(getscrolltop >= 200){
				$(".navbar").addClass("navmenus");
			}else{
				$(".navbar").removeClass("navmenus");
			}


		});
	// End Nav

	// End Header


	// Start Properties

	$(".propertylists").click(function(){

		// for activeitems

		// $(this).addClass("activeitems");
		// $(this).siblings().removeClass("activeitems");
		$(this).addClass("activeitems").siblings().removeClass("activeitems");

		// for filters

		let getattvalue = $(this).attr("data-filter");
		console.log(getattvalue);

		if(getattvalue === "all"){
			$(".filters").show("slide",500);
		}else{

			$(".filters").hide();

			$(".filters").not("."+getattvalue).hide("slide",500);

			$(".filters").filter("."+getattvalue).show("slide",500);
		}


	});

	// for image overlay (or) lightbox2 (object=no need semicolumn. need comma)

	lightbox.option({

      showImageNumberLabel: false

    });

	// End Properties


	// Start Adv Section

	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();
		console.log(getscrolltop);

		if(getscrolltop >= 900){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}

	});

	// End Adv Section

	// Start Footer Section
	const getyear = $("#getyear");
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);
	// End Footer Section




});