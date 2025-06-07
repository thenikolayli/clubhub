export const ClubCard = (props) => {
    return (
        <div class={"border-4 rounded-xl border-cwhite bg-cwhite w-full h-[30rem] flex flex-col"}>
            <div class={"w-full h-[10rem] rounded-xl border-4 overflow-hidden border-cwhite"}>
                <img class={"object-cover"} src={props.url} alt={props.name}/>
            </div>
            <div class={"relative border-4 p-2 rounded-xl h-[20rem] w-full bg-corange border-cwhite"}>
                <header class={"h-[3rem]"}>{props.name}</header>
                <h1 class="text-xl w-full h-[16rem] overflow-hidden break-words">{props.description}</h1>
                <div class={"absolute h-[6rem] z-10 bottom-0 left-0 pr-2 more w-full h-[2em] bg-gradient-to-t from-corange to-transparent from-30%"}>
                    <button class={"text-xl absolute right-3 bottom-2 underline"}>
                        see more
                    </button>
                </div>
            </div>
        </div>
    )
}