import {createSignal, onMount} from "solid-js";
import logo from "../assets/logo.png";
import {ClubCard} from "../components/ClubCard.jsx";

export const Home = () => {
    const [clubs, set_clubs] = createSignal([])

    onMount(() => {
        document.title = "clubhub"
    })

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
                                  url={"https://images.unsplash.com/photo-1749117631912-df9d281e9744"} />
                        <ClubCard name={"jit club"} description={"clubhubssdfgasdfasfgsdfgsdfgsdfgsdfgsdfg"}
                                  url={"https://images.unsplash.com/photo-1749117631912-df9d281e9744"} />
                        <ClubCard name={"jit club"} description={"clubhubssdfgasdfasfgsdfgsdfgsdfgsdfgsdfg"}
                                  url={"https://images.unsplash.com/photo-1749117631912-df9d281e9744"} />
                        <ClubCard name={"jit club"} description={"clubhubssdfgasdfasfgsdfgsdfgsdfgsdfgsdfg"}
                                  url={"https://images.unsplash.com/photo-1749117631912-df9d281e9744"} />
                    </div>
                </div>
            </section>
        </>
    )
}

// e57e38
// f8ebd6