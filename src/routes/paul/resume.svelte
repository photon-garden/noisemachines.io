<script>
  import Resume from "../../components/Resume/index.svelte"
  import logo from "./logo.svelte"

  const name = `Paul Prae`
  const jobTitle = `Artificial Intelligence Systems Architect`
  const location = `Atlanta, GA`
  const website = `https://www.paulprae.com`
  const email = `paul.prae@outlook.com`

  const intro = `I strive to make the most positive impact on existence as possible. I'm a technical leader with over ten years of experience designing and building enterprise-ready machine learning, natural language processing, and data science systems. No matter the complexity, no matter the challenge, my teams deliver.`
  const positions = [
    {
      jobTitle: "Solutions Architect",
      employer: "Amazon Web Services",
      location: "Atlanta, GA",
      description:
        "Provide senior technical leadership prescriptive guidance, best practices, and assistance in designing and building systems on AWS that are secure, scalable, reliable, and performant."
    },
    {
      jobTitle: "Senior AI Engineer",
      employer: "NeuroLex",
      location: "Atlanta, GA",
      description:
        "Architected and developed software applications, web services, and data pipelines to make voice computing accessible to everyone. Designed automated machine learning workflows that collected data, cleaned data, trained models, and deployed models."
    },
    {
      jobTitle: "ADVANCED ANALYTICS CONSULTANT",
      employer: "Slalom Consulting",
      location: "Atlanta, GA",
      description:
        "Operationalized data science experiments and data science teams. I collected, transferred, stored, explored, and prepared data."
    }
  ]
  const projects = []
  const skills = []
  const education = []

  const paul = {
    name,
    jobTitle,
    location,
    website,
    email,
    logo,
    intro,

    positions,
    projects,
    skills,
    education
  }
</script>

<Resume person={paul} />
