import { Cross as Hamburger } from 'hamburger-react'

export function HamburgerMenu(){
    const [isOpen, setOpen] = useState(false);

    return(
        <Hamburger toggled={isOpen} toggle={setOpen} />
    )

    
}