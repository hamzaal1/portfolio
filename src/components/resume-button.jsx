"use client";
function Resumebutton() {
    return (
        <>
            <button
                onClick={(e) => window.open("/hamza-demnani.pdf", "_blank")}
                className="bg-primary hover:bg-secondary hover:text-primary py-1 px-3 rounded-sm">Watch My Resume</button>
        </>
    )
}

export default Resumebutton