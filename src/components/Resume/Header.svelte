<script>
  export let person

  import LocationIcon from "../icons/Location.svelte"
  import GlobeIcon from "../icons/Globe.svelte"
  import MailIcon from "../icons/Mail.svelte"
</script>

<style>
  * {
    color: #fffffe;
  }
  :global(svg) {
    fill: #fffffe;
    stroke: #fffffe;
  }
  .header {
    background-color: #78c8cc;
    display: flex;
    justify-content: center;
  }

  .container {
    display: flex;
    max-width: 860px;
  }

  .name {
    text-transform: uppercase;
  }

  .details {
    display: flex;
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
          <div class="name">{person.name}</div>
          <div class="title">{person.jobTitle}</div>
        </div>
        <div class="contact">
          <div class="location">
            <LocationIcon />
            {person.location}
          </div>
          <div class="website">
            <GlobeIcon />
            {person.website}
          </div>
          <div class="email">
            <MailIcon />
            {person.email}
          </div>
        </div>
      </div>
      <div class="intro">{person.intro}</div>
    </div>
  </div>
</div>
