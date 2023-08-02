import { Container, ListItem } from "./styles";

interface Props {
    title?: string,
    name?: string,
    active?: boolean
}

function Header({ title, name, active }: Props){
    return(
        <Container>
            <ListItem active={true}>Home</ListItem>
            <ListItem active={false}>Contato</ListItem>
            <ListItem active={false}>Fotos</ListItem>
        </Container>
    )
}

export default Header;