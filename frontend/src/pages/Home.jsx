import {createSignal, onMount} from "solid-js";
import logo from "../assets/logo.png";
import {ClubCard} from "../components/ClubCard.jsx";
import gsap from "gsap";
import axios from "axios";
import {FaRegularTrashCan} from "solid-icons/fa";

export const Home = () => {
    const [clubs, set_clubs] = createSignal([])

    const [url, set_url] = createSignal("")
    const [name, set_name] = createSignal("")
    const [description, set_description] = createSignal("")

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

        update_clubs(10).then()
    })

    const update_clubs = async (number) => {
        const result = await axios({
            method: "get",
            url: `/api/club?number=${number}`,
        })

        set_clubs(result.data)
    }

    const delete_club = async (name) => {
        const result = await axios({
            method: "delete",
            url: `/api/club?name=${name}`,
        })

        update_clubs(clubs().length - 1).then()
        toggle_menu("", "", "", false)
    }

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
                opacity: 0,
                onComplete: () => {
                    gsap.set(".more-menu", {
                        display: "none"
                    })
                }
            }, 0)
            timeline.to(".more-panel", {
                opacity: 0,
                onComplete: () => {
                    gsap.set(".more-panel", {
                        display: "none"
                    })

                    set_url(purl)
                    set_name(pname)
                    set_description(pdescription)
                }
            }, 0)
        }
    }

    const animate_button = (text_selector, bg_selector, is_mouse_inside) => {
        const timeline = gsap.timeline({
            defaults: {
                duration: .2,
                ease: "power2.out",
            }
        })

        timeline.to(bg_selector, {
            scale: is_mouse_inside ? 65 : 0,
            opacity: is_mouse_inside ? 1 : 0,
            transformOrigin: "center",
        }, 0)
        timeline.to(text_selector, {
            color: is_mouse_inside ? "#e57e38" : "#f8ebd6",
        }, .1)
    }

    return (
        <>
            <section class={"w-full min-h-screen"}>
                <header class={"font-medium text-7xl flex items-center w-fit mx-auto pt-[4rem]"}>
                    welcome
                    <br/>
                    to clubhub
                    <img class={"ml-2 h-[3em]"} src={logo} alt="Logo"/>
                </header>

                <div
                    class={"mx-auto w-fit max-w-1/2 mt-[2rem] shadow-xl border-[#d87534] border-4 py-[3.5rem] p-[3rem] text-4xl rounded-lg flex flex-col items-center justify-center"}>
                    <h1 class="text-2xl">
                        clubhub is a web app that lets high school students post clubs for others to join.
                        It's an easy and simple way to share and find clubs without having to check the school website,
                        which is often not up to date.
                        you can also <a class={"underline"} href="/post">create your own club.</a>
                    </h1>
                    <hr class={"border-[1px] border-cwhite my-8 w-[80%] mx-auto"}/>

                    <div class="grid grid-cols-2 gap-4">
                        {clubs().map((club) => (
                            <ClubCard name={club.name} description={club.description} url={club.imageUrl}
                                      toggle_menu={toggle_menu}/>
                        ))}
                    </div>

                    <hr class={"border-[1px] border-cwhite my-8 w-[80%] mx-auto"}/>
                    <button class={"relative border-3 p-2 rounded-lg border-cwhite overflow-hidden"}
                            onmouseenter={() => animate_button(".button-text", ".button-bg", true)}
                            onmouseleave={() => animate_button(".button-text", ".button-bg", false)}
                            onclick={() => update_clubs(clubs().length + 4)}
                    >
                        <h1 class={"button-text relative z-10 px-6"}>load more</h1>
                        <div
                            class="button-bg z-0 absolute inset-0 flex self-center opacity-0 h-1 w-1 mx-auto bg-cwhite rounded-full"/>
                    </button>
                </div>
            </section>

            <button class={"more-menu fixed top-0 left-0 w-screen h-screen z-30 backdrop-blur"}
                    onclick={() => toggle_menu("", "", "", false)}
            />

            <section
                class={"more-panel fixed h-[90vh] w-[45%] inset-0 m-auto z-40 border-4 rounded-xl border-cwhite bg-cwhite"}>
                <div class={"relative w-full h-[30vh] rounded-xl border-4 overflow-hidden border-cwhite"}>
                    <img class={"object-cover"} src={url()} alt={name()}/>
                    <button class={"absolute z-20 right-0 bottom-0 p-2 rounded-tl-xl bg-cwhite"}
                            onclick={() => delete_club(name())}
                    >
                        <FaRegularTrashCan class={"size-[3em] text-corange"}/>
                    </button>
                </div>

                <div class={"w-full h-[59vh] rounded-xl border-4 p-2 border-cwhite bg-corange break-words"}>
                    <header class={"text-4xl"}>{name()}</header>
                    <h1 class={"text-xl"}>{description()}</h1>
                </div>
            </section>
        </>
    )
}

// e57e38
// f8ebd6