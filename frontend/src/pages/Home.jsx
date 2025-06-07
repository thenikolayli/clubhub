import {createSignal, onMount} from "solid-js";
import logo from "../assets/logo.png";
import {ClubCard} from "../components/ClubCard.jsx";
import gsap from "gsap";

export const Home = () => {
    const [clubs, set_clubs] = createSignal([])

    const [url, set_url] = createSignal("https://images.unsplash.com/photo-1749117631912-df9d281e9744")
    const [name, set_name] = createSignal("clubhub")
    const [description, set_description] = createSignal("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")

    onMount(() => {
        document.title = "clubhub"

        gsap.set(".more-menu", {
            opacity: 0,
            display: "none"
        })
        gsap.set(".more-panel", {
            opacity: 0,
            display: "none"
        })
    })

    const toggle_menu = (purl, pname, pdescription, visible) => {
        // update state
        // toggle menu

        const timeline = gsap.timeline({
            defaults: {
                duration: .4,
                ease: "power2.out"
            }
        })

        if (visible) {
            set_url(purl)
            set_name(pname)
            set_description(pdescription)
            gsap.set(".more-menu", {
                display: "block"
            })
            gsap.set(".more-panel", {
                display: "block"
            })

            timeline.to(".more-menu", {
                opacity: 1
            }, 0)
            timeline.to(".more-panel", {
                opacity: 1
            }, .1)
        } else {
            timeline.to(".more-menu", {
                opacity: 0
            }, 0).then(() => {
                gsap.set(".more-menu", {
                    display: "none"
                })
            })
            timeline.to(".more-panel", {
                opacity: 0
            }, 0).then(() => {
                gsap.set(".more-menu", {
                    display: "none"
                })
                set_url(purl)
                set_name(pname)
                set_description(pdescription)
            })
        }
    }

    return (
        <>
            <section class={"w-full h-screen"}>
                <header class={"font-medium text-7xl flex items-center w-fit mx-auto pt-[4rem]"}>
                    welcome
                    <br/>
                    to clubhub
                    <img class={"ml-2 h-[3em]"} src={logo} alt="Logo"/>
                </header>

                <div class={"mx-auto w-fit max-w-1/2 mt-[2rem] shadow-xl border-[#d87534] border-4 py-[3.5rem] p-[3rem] text-4xl rounded-lg"}>
                    <h1 class="text-2xl">
                        clubhub is a web app that lets high school students post clubs for others to join.
                        It's an easy and simple way to share and find clubs without having to check the school website,
                        which is often not up to date.
                        you can also <a class={"underline"} href="/post">create your own club.</a>
                    </h1>
                    <hr class={"border-[1px] border-cwhite my-8 w-[80%] mx-auto"}/>

                    <div class="grid grid-cols-2 gap-4">
                        <ClubCard name={"jit club"} description={"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"}
                                  url={"https://images.unsplash.com/photo-1749117631912-df9d281e9744"} toggle_menu={toggle_menu}/>
                        <ClubCard name={"jjj club"} description={"clubhubssdfgasdfasfgsdfgsdfgsdfgsdfgsdfg"}
                                  url={"https://images.unsplash.com/photo-1749117631912-df9d281e9744"} />
                        {/*<ClubCard name={"jit club"} description={"clubhubssdfgasdfasfgsdfgsdfgsdfgsdfgsdfg"}*/}
                        {/*          url={"https://images.unsplash.com/photo-1749117631912-df9d281e9744"} />*/}
                        {/*<ClubCard name={"jit club"} description={"clubhubssdfgasdfasfgsdfgsdfgsdfgsdfgsdfg"}*/}
                        {/*          url={"https://images.unsplash.com/photo-1749117631912-df9d281e9744"} />*/}
                    </div>
                </div>
            </section>

            <button class={"fixed top-0 left-0 more-menu w-screen h-screen z-30 backdrop-blur"}
                    onclick={() => toggle_menu("", "", "", false)}
            />

            <section class={"absolute inset-x-0 mx-auto top-10 more-panel w-[45%] z-40 border-4 rounded-xl border-cwhite bg-cwhite"}>
                <div class="w-full h-[20rem] rounded-xl border-4 overflow-hidden border-cwhite">
                    <img class={"object-cover"} src={url()} alt={name()}/>
                </div>

                <div class="w-full rounded-xl border-4 p-2 border-cwhite bg-corange break-words">
                    <header class={"text-4xl"}>{name()}</header>
                    <h1 class={"text-xl"}>{description()}</h1>
                </div>
            </section>
        </>
    )
}

// e57e38
// f8ebd6