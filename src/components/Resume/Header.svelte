<script>
  export let person

  import LocationIcon from "../icons/Location.svelte"
  import GlobeIcon from "../icons/Globe.svelte"
  import MailIcon from "../icons/Mail.svelte"
  import { onMount } from "svelte"

  const websiteHref = person.website
  const website = person.website.replace("https://", "")

  const emailHref = "mailto:" + person.email
  const email = person.email

  const firstLetter = person.name[0].toUpperCase()

  let logoPromise = new Promise(() => {})
  onMount(() => {
    logoPromise = window
      .fetch(`svg-alphabet/${firstLetter}.svg`)
      .then(response => response.text())
  })
</script>

<style>
  :global(*) {
    font-family: Cantarell;
  }

  * {
    color: var(--white-text);
    font-weight: bold;
    font-size: 8px;
  }

  .header {
    background-color: var(--brand-color);
    display: flex;
    justify-content: center;
  }

  .container {
    display: flex;
    max-width: var(--width);
    margin-top: 38px;
    margin-bottom: 25px;
  }

  .logo {
    margin-right: 21px;
    margin-left: 44px;
  }

  :global(.logo svg) {
    width: 92px;
    height: 110px;
    stroke-width: 1px;
    fill: none;
    stroke: var(--white-text);
  }

  :global(.contact svg) {
    /* fill: var(--white-text);
    stroke: var(--white-text); */
    overflow: visible;
  }

  .header .name {
    text-transform: uppercase;
    height: 33px;
    margin-bottom: 0;
    margin-top: 4px;
    position: relative;

    font-family: BebasNeueRegular;
    font-weight: normal;
    font-size: 38px;

    letter-spacing: 9px;
  }

  .job-title {
    margin-top: 9px;
  }

  .name-and-title {
    padding-bottom: 14px;
  }

  .intro-and-details {
    margin-right: 37px;
  }

  .details {
    display: flex;
    position: relative;
  }

  .contact {
    text-transform: uppercase;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    right: 0;
    height: 100%;
    width: 150px;
  }

  .contact * {
    font-family: BebasNeueRegular;
    font-weight: normal;
    font-size: 12px;
  }

  .contact a {
    text-decoration: none;
  }

  .contact .item {
    display: flex;
    align-items: center;
  }

  .contact .icon {
    display: flex;
    justify-content: center;
    width: 17px;
  }

  .contact-text {
    height: 14px;
  }

  .intro {
    margin-top: 17px;
  }
</style>

<div class="header">
  <div class="container">
    <div class="logo">
      {#await logoPromise then logo}
        {@html logo}
      {/await}
    </div>
    <div class="intro-and-details">
      <div class="details">
        <div class="name-and-title">
          <h1 class="name">{person.name}</h1>
          <div class="job-title">{person.jobTitle}</div>
        </div>
        <div class="contact">
          <div class="location item">
            <div class="icon">
              <LocationIcon />
            </div>
            <div class="contact-text">{person.location}</div>
          </div>
          <div class="website item">
            <div class="icon">
              <GlobeIcon />
            </div>
            <a href={websiteHref}>{website}</a>
          </div>
          <div class="email item">
            <div class="icon">
              <MailIcon />
            </div>
            <a href={emailHref}>{person.email}</a>
          </div>
        </div>
      </div>
      <div class="intro">{person.intro}</div>
    </div>
  </div>
</div>
