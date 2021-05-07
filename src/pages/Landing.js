import { TopBar, SubBar, FirstFlat, SecondFlat, Testimonies, ThirdFlat, Footer } from '../components'
import { data, data2 } from '../lib/tdata'

const Landing = () => {
    return <>
        <TopBar />
        <SubBar />
        <FirstFlat />
        <SecondFlat />
        <Testimonies  data={data} />
        <ThirdFlat />
        <Testimonies data={data2}/>
        <Footer />
    </>
};

export default Landing;