$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        const menuIsOpen = $('.navbar .menu').hasClass("active");

        $(this).attr("aria-expanded", menuIsOpen);
        $(this).find(".menu-icon").html(menuIsOpen ? "&times;" : "&#9776;");
    });

    $('.navbar .menu a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn').attr("aria-expanded", "false");
        $('.menu-btn .menu-icon').html("&#9776;");
    });

    const teamCarousel = document.querySelector(".quemsomos .center");
    const teamCards = teamCarousel ? Array.from(teamCarousel.querySelectorAll(".property-card")) : [];
    const teamProgress = document.querySelector(".team-carousel-progress");
    const teamCarouselQuery = window.matchMedia("(max-width: 520px)");
    let teamCarouselIndex = 0;
    let teamCarouselTimer = null;

    function getTeamCarouselGap(){
        const styles = window.getComputedStyle(teamCarousel);
        const gap = parseFloat(styles.columnGap || styles.gap);

        return Number.isNaN(gap) ? 0 : gap;
    }

    function updateTeamCarouselProgress(){
        if(!teamProgress || teamCards.length === 0){
            return;
        }

        const progress = ((teamCarouselIndex + 1) / teamCards.length) * 100;
        teamProgress.style.setProperty("--team-carousel-progress", `${progress}%`);
    }

    function updateTeamCarousel(){
        if(!teamCarousel || !teamCarouselQuery.matches || teamCards.length === 0){
            return;
        }

        const carouselWidth = teamCarousel.parentElement.getBoundingClientRect().width;
        const cardWidth = teamCards[0].getBoundingClientRect().width;
        const cardStep = cardWidth + getTeamCarouselGap();
        const offset = (carouselWidth - cardWidth) / 2 - (teamCarouselIndex * cardStep);

        teamCarousel.style.setProperty("--team-carousel-offset", `${offset}px`);
        updateTeamCarouselProgress();
    }

    function startTeamCarousel(){
        if(!teamCarousel || teamCards.length < 2){
            return;
        }

        updateTeamCarousel();

        if(teamCarouselTimer){
            return;
        }

        teamCarouselTimer = window.setInterval(function(){
            teamCarouselIndex = (teamCarouselIndex + 1) % teamCards.length;
            updateTeamCarousel();
        }, 3000);
    }

    function stopTeamCarousel(){
        if(teamCarouselTimer){
            window.clearInterval(teamCarouselTimer);
            teamCarouselTimer = null;
        }

        teamCarouselIndex = 0;

        if(teamCarousel){
            teamCarousel.style.removeProperty("--team-carousel-offset");
        }
    }

    function syncTeamCarousel(){
        if(teamCarouselQuery.matches){
            startTeamCarousel();
        }else{
            stopTeamCarousel();
        }
    }

    syncTeamCarousel();
    window.addEventListener("resize", updateTeamCarousel);
    window.addEventListener("load", updateTeamCarousel);

    if(teamCarouselQuery.addEventListener){
        teamCarouselQuery.addEventListener("change", syncTeamCarousel);
    }else{
        teamCarouselQuery.addListener(syncTeamCarousel);
    }
});
