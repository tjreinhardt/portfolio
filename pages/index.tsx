import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import CompanyHero from '../components/CompanyHero'
import CompanyAbout from '../components/CompanyAbout'
import DataRevolution from '../components/DataRevolution'
import AIServices from '../components/AIServices'
import Customers from '../components/Customers'
import DataApplications from '../components/DataApplications'
import Business from '../components/Business'
import DataPrivacy from '../components/DataPrivacy'
import Launch from '../components/Launch'
import ContactMe from '../components/ContactMe'
import { fetchCompanyInfo } from '../utils/fetchCompanyInfo'
import { fetchAIServices } from '../utils/fetchAIServices'
import { fetchCustomers } from '../utils/fetchCustomers'
import { fetchBusinessModel } from '../utils/fetchBusinessModel'
import { fetchLaunchInfo } from '../utils/fetchLaunchInfo'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  companyInfo: any;
  aiServices: any[];
  customers: any[];
  businessModel: any;
  launchInfo: any;
  socials: any[];
}

const Home = ({ companyInfo, aiServices, customers, businessModel, launchInfo, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white min-h-screen
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{companyInfo?.name ? `${companyInfo.name} - ${companyInfo.tagline}` : 'Food Industry AI'}</title>
        <meta name="description" content={companyInfo?.aboutCompany || "Revolutionizing food industry intelligence through comprehensive data solutions"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header socials={socials} />

      <section id="hero">
        <CompanyHero companyInfo={companyInfo} />
      </section>

      <section id="about">
        <CompanyAbout companyInfo={companyInfo} />
      </section>

      <section id="data">
        <DataRevolution />
      </section>

      <section id="ai-services">
        <AIServices aiServices={aiServices} />
      </section>

      <section id="customers">
        <Customers customers={customers} />
      </section>

      <section id="data-applications">
        <DataApplications />
      </section>

      <section id="business">
        <Business businessModel={businessModel} />
      </section>

      <section id="privacy">
        <DataPrivacy />
      </section>

      <section id="launch">
        <Launch launchInfo={launchInfo} />
      </section>

      <section id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-1 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <svg className='h-8 w-8 rounded-full filter hover:bg-[#F7AB0A]/80 cursor-pointer transition duration-200 ease-in-out' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path className="hover:red-500" strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const companyInfo = await fetchCompanyInfo();
  const aiServices = await fetchAIServices();
  const customers = await fetchCustomers();
  const businessModel = await fetchBusinessModel();
  const launchInfo = await fetchLaunchInfo();
  const socials = await fetchSocials();

  return {
    props: {
      companyInfo,
      aiServices,
      customers,
      businessModel,
      launchInfo,
      socials,
    },
    revalidate: 10,
  }
}
