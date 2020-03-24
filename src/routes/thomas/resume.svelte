<script>
  import Resume from "../../components/Resume/index.svelte"
  import logo from "./logo.svelte"

  const name = `Thomas Bailey`
  const jobTitle = `Senior Artificial Intelligence Engineer`
  const location = `Atlanta, GA`
  const website = `https://noisemachines.io`
  const email = `thomas@datajoy.co`

  const intro = `I strive to make the most positive impact on existence as possible. I'm a technical leader with over ten years of experience designing and building enterprise-ready machine learning, natural language processing, and data science systems. No matter the complexity, no matter the challenge, my teams deliver.`
  const experience = []
  const projects = []
  const skills = []
  const education = []

  const thomas = {
    name,
    jobTitle,
    location,
    website,
    email,
    logo,
    intro,

    experience,
    projects,
    skills,
    education
  }
</script>

<Resume person={thomas} />
