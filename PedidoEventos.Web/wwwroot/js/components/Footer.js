const Footer = {
    template: /*html*/ `
      <footer class="container bg-dark mt-2 py-1">
        <div class="d-flex justify-content-around align-items-center">
          <div class="d-flex flex-column">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" stroke="currentColor" stroke-linecap="round"   stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24">
              <title>Product</title>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13. 79-4l-5.74 9.94">
              </path>
            </svg>
            <small class="d-block mb-3 link-secondary">© 2017–2023</small>
          </div>
          <div class="d-flex flex-column">
            <ul class="list-unstyled text-small m-0">
              <li><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    `,
};

export { Footer };