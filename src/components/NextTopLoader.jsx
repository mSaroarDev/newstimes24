import NextTopLoader from "nextjs-toploader";


export default function NextTopLoaderProgressBar(){
    return (
        <NextTopLoader
          color="#B3E240"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
    )
}