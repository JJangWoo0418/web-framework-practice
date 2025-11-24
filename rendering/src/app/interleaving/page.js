import CcOne from "@/components/cc-one";
import ScOne from "@/components/sc-one";

export default function InterLeavingPage(){
    return(
        <>
            <h1>InterLeavingPage</h1>
            <ScOne/>
            <CcOne>
                <ScOne/>
            </CcOne>
        </>
    )
}