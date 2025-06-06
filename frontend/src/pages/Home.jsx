import {onMount} from "solid-js";
import logo from "../assets/logo.png";

export const Home = () => {
    onMount(() => {
        document.title = "clubhub"
    })

    return (
        <>
            <section class={"w-full h-screen"}>
                <header class={"font-medium text-7xl flex items-center w-fit mx-auto pt-[4rem]"}>
                    Welcome
                    <br/>
                    to clubhub
                    <img class={"ml-2 h-[3em]"} src={logo} alt="Logo"/>
                </header>
            </section>
        </>
    )
}

// e57e38
// f8ebd6