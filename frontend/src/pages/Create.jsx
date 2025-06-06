import {createEffect, onMount} from "solid-js";
import logo from "../assets/logo.png";
import {createSignal} from "solid-js";
import gsap from "gsap";
import axios from "axios";

export const Create = () => {
    onMount(() => {
        document.title = "create a club"
    })
    const [name, set_name] = createSignal("")
    const [description, set_description] = createSignal("") // 710 character limit
    const [url, set_url] = createSignal("")
    const [api, set_api] = createSignal("")


    const animate_text = (field, selector, is_mouse_inside) => {
        gsap.to(selector, {
            scale: field() !== "" || is_mouse_inside ? .8 : 1,
            y: field() !== "" || is_mouse_inside ? "-80%" : 1,
            opacity: field() !== "" || is_mouse_inside ? .8 : 1,
            ease: "power2.out",
            transformOrigin: "top left",
            duration: .2
        })
    }

    const animate_button = (text_selector, bg_selector, is_mouse_inside) => {
        const timeline = gsap.timeline({
            defaults: {
                duration: .2,
                ease: "power2.out",
            }
        })

        timeline.to(bg_selector, {
            scale: is_mouse_inside ? 45 : 0,
            opacity: is_mouse_inside ? 1 : 0,
            transformOrigin: "center",
        }, 0)
        timeline.to(text_selector, {
            color: is_mouse_inside ? "#e57e38" : "#f8ebd6",
        }, .1)
    }

    const create_club = async (event) => {
        event.preventDefault();
        try {
            const response = await axios({
                method: "post",
                url: "/api/club",
                data: {
                    name: name(),
                    description: description(),
                    url: url()
                }
            })
            console.log(response)
            set_api("club created")
        } catch (error) {
            console.log(error)
            set_api("an error has occurred...")
        }
    }

    createEffect(() => {
        animate_text(name, ".name", false)
    })

    createEffect(() => {
        if (description().length > 380) {
            set_description(description().slice(0, 380))
        }
    })

    return (
        <>
            <section class={"w-full h-screen mb-[10rem]"}>
                <a class={"font-medium text-6xl flex items-center w-fit mx-auto pt-[1rem]"}
                   href={"/"}
                >
                    post
                    <br/>
                    a club
                    <img class={"ml-2 h-[3em]"} src={logo} alt="Logo"/>
                </a>

                <form onsubmit={create_club}
                      class={"mx-auto max-w-[35%] w-fit mt-[2rem] shadow-xl border-[#d87534] border-4 py-[3.5rem] p-[3rem] text-4xl rounded-lg"}>

                    <div class={"relative border-b-3 border-cwhite"}
                         onmouseenter={() => animate_text(name, ".name", true)}
                         onmouseleave={() => animate_text(name, ".name", false)}
                    >
                        <input class={"outline-none relative z-10"} type="text" value={name()}
                               oninput={(event) => set_name(event.target.value)}
                        />
                        <h1 class={"name absolute top-0 left-0"}>club name</h1>
                    </div>

                    <div class={"relative mt-10 border-b-3 border-cwhite"}
                         onmouseenter={() => animate_text(url, ".url", true)}
                         onmouseleave={() => animate_text(url, ".url", false)}>
                        <input class={"outline-none relative z-10"} type="text" value={url()}
                               oninput={(event) => set_url(event.target.value)}/>
                        <h1 class={"url absolute top-0 left-0"}>club image url</h1>
                    </div>

                    <div class="relative mt-10">
                        <h1 class={"description"}>club description</h1>
                        <textarea value = {description()} oninput={(event) => set_description(event.target.value)}
                                  class={"resize-y word-break field-sizing-content z-10 max-h-[24em] h-[10em] overflow-hidden mt-2 w-full outline-none border-3 border-cwhite rounded-lg text-lg p-2"}/>
                        <h1 class={"absolute right-3 bottom-4 text-lg text-left"}>{description().length}/380</h1>
                    </div>

                    <button type={"submit"} class={"relative border-3 p-2 mt-4 rounded-lg border-cwhite overflow-hidden"}
                            onmouseenter={() => animate_button(".button-text", ".button-bg", true)}
                            onmouseleave={() => animate_button(".button-text", ".button-bg", false)}
                    >
                        <h1 class={"button-text relative z-10 px-6"}>post</h1>
                        <div class="button-bg z-0 absolute inset-0 flex self-center opacity-0 h-1 w-1 mx-auto bg-cwhite rounded-full"/>
                    </button>
                    <h1 class={"mt-4 text-2xl"}>{api()}</h1>
                </form>
            </section>
        </>
    )
}