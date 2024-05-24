<template>
  <div class="faq-accordion" id="faq-accordion">
    <div class="accordion">
      <div class="accordion-item">
        <h5 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
          >
            How do I register for the conference?
          </button>
        </h5>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#faq-accordion"
        >
          <div class="accordion-body">
            <p>
              You can register for the Global Innovators Conference 2024 by
              visiting our registration page on the website. Simply fill out the
              required information, choose your ticket type, and complete the
              payment process.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h5 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
          >
            What is the schedule for the conference?
          </button>
        </h5>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#faq-accordion"
        >
          <div class="accordion-body">
            <p>
              The detailed schedule, including keynote sessions, track-specific
              presentations, and networking events, is available on the Schedule
              page of our website. The schedule is regularly updated, so please
              check back for the latest information.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h5 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
          >
            Are there accommodations available for attendees?
          </button>
        </h5>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#faq-accordion"
        >
          <div class="accordion-body">
            <p>
              Yes, we have partnered with several hotels near the conference
              venue to offer special rates for attendees. You can find more
              information and book your accommodation through the Accommodations
              page on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
