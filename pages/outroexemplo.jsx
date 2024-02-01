import Header from '../src/componentes/header/Header'
import Title from '../src/componentes/title/Title'
import Subtitle from '../src/componentes/subtitle/Subtitle'

function OutroExemploPage() {
    return (

        <>
            <Header image={'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'}>
                <Title>Outro Café Dev</Title>
                <Subtitle text="O Segundo melhor café para o programador" />
            </Header>
        </>

    )
}

export default OutroExemploPage