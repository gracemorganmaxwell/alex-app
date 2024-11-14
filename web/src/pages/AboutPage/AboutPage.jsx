import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />
      <p className="tw-bg-red-500">
        This site was created to demonstrate how to build a web app with
        RedwoodJS.
      </p>
    </>
  )
}

export default AboutPage
