
    // RESPONSIVE MENU
        const nameClass = "animation-menu"  

        function mobileMenu () {
            $("#btn-open").click(() =>{
                $("#nav-mobile").addClass(nameClass)
                $("#ul-mobile").addClass(nameClass)
            })
            $("#btn-close").click(() =>{
                $("#nav-mobile").removeClass(nameClass)
                $("#ul-mobile").removeClass(nameClass)
            })
        }

        mobileMenu()

    //Animation Fade Image
        const nameClassAnimationFade = "anima-fade"
        const targetAttribute = document.querySelectorAll('[data-fade]')
        
        function animeFadeScroll () {
            const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
            targetAttribute.forEach((element, id) =>{
                if (windowTop > element.offsetTop) {
                    setTimeout(() =>{
                        element.classList.add(nameClassAnimationFade)
                    }, 75 * id)

                } else {
                    setTimeout(() =>{
                        element.classList.remove(nameClassAnimationFade)
                    }, 75 * id)
                }
            })
        }

        window.addEventListener('scroll', () => {
            animeFadeScroll()
        })

    //Animation text transition
        const nameClassAnimationTransition = "anima-transition"
        const targetAttributeTransition = document.querySelectorAll('[data-transition]')
        
        function animeTransitionScroll () {
            const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
            targetAttributeTransition.forEach((element) =>{
                if (windowTop > element.offsetTop) {
                    element.classList.add(nameClassAnimationTransition)

                } else {
                    element.classList.remove(nameClassAnimationTransition)
                }
            })
        }

        window.addEventListener('scroll', () => {
            animeTransitionScroll()
        })
        
        
