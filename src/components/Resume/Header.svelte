<script>
  export let person

  import LocationIcon from "../icons/Location.svelte"
  import GlobeIcon from "../icons/Globe.svelte"
  import MailIcon from "../icons/Mail.svelte"

  const websiteHref = person.website
  const website = person.website.replace("https://", "")

  const emailHref = "mailto:" + person.email
  const email = person.email
</script>

<style>
  * {
    color: var(--white-text);
  }
  .header {
    background-color: var(--brand-color);
    display: flex;
    justify-content: center;
  }

  .container {
    display: flex;
    max-width: var(--width);
    margin-top: 78px;
    margin-bottom: 62px;
  }

  .logo {
    margin-right: 42px;
    margin-left: 123px;
  }

  :global(.logo svg) {
    height: 227px;
  }

  :global(.logo svg path) {
    stroke-width: 7px;
  }

  :global(svg) {
    fill: var(--white-text);
    stroke: var(--white-text);
  }

  .name {
    text-transform: uppercase;
    font-size: 69px;
    height: 68px;
    margin-bottom: 0;
    margin-top: 1px;
    position: relative;
  }

  .job-title {
    margin-top: 27px;
  }

  .details {
    display: flex;
    position: relative;
  }

  .contact {
    text-transform: uppercase;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    right: 0;
    height: 100%;
    width: 292px;
  }

  .contact a {
    text-decoration: none;
  }

  .contact .item {
    display: flex;
    align-items: center;
  }

  .contact .icon {
    margin-right: 10px;
    display: flex;
    justify-content: center;
  }

  .intro {
    margin-top: 41px;
  }
</style>

<div class="header">
  <div class="container">
    <div class="logo">
      <svelte:component this={person.logo} />
    </div>
    <div class="intro-and-details">
      <div class="details">
        <div class="name-and-title">
          <h1 class="name">{person.name}</h1>
          <div class="job-title">{person.jobTitle}</div>
        </div>
        <div class="contact">
          <div class="location item">
            <span class="icon">
              <LocationIcon />
            </span>
            {person.location}
          </div>
          <div class="website item">
            <span class="icon">
              <GlobeIcon />
            </span>
            <a href={websiteHref}>{website}</a>
          </div>
          <div class="email item">
            <span class="icon">
              <MailIcon />
            </span>
            <a href={emailHref}>{person.email}</a>
          </div>
        </div>
      </div>
      <div class="intro">{person.intro}</div>
    </div>
  </div>
</div>
