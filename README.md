# Open Chatty

![Build Status](https://github.com/VonderTech/open-chatty/actions/workflows/frontend.yml/badge.svg)
![Dependabot Status](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7869624c70bd4c38bf0d2bd9f5aab257)](https://app.codacy.com/gh/VonderTech/open-chatty/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![GitHub last commit](https://img.shields.io/github/last-commit/VonderTech/open-chatty)
![GitHub issues](https://img.shields.io/github/issues/VonderTech/open-chatty)
[![License: MIT][license_badge]][license_link]

## Description

Open Chatty is a simple Next.js application demonstrating how to use server-sent events (SSE) with the OpenAI API. It features an input field for the prompt, a send button, a cancel button, and a streaming display of the response below.

## Features

- Input field for prompt
- Send button to trigger the API call
- Cancel button to stop the API call

## Demo

Watch the demo video to see Open Chatty in action:

[![Open Chatty Demo](https://img.youtube.com/vi/t5vMKZtA-ZY/0.jpg)](https://www.youtube.com/watch?v=t5vMKZtA-ZY)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/VonderTech/open-chatty.git
   cd open-chatty
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

3. **Set up your OpenAI API key:**

   Create a `.env.local` file in the root directory and add your OpenAI API key:

   ```plaintext
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Enter your prompt in the input field.
2. Click the **Send** button to send the prompt to the OpenAI API.
3. The response will be streamed and displayed below the input field.
4. If needed, you can click the **Cancel** button to stop the API call.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**
2. **Create your Feature Branch (`git checkout -b feature/AmazingFeature`)**
3. **Commit your Changes (`git commit -m 'Add some AmazingFeature'`)**
4. **Push to the Branch (`git push origin feature/AmazingFeature`)**
5. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Attributions

[Happy icons created by adriansyah - Flaticon](https://www.flaticon.com/free-icons/happy)

## Contact

For inquiries, feedback, or collaboration opportunities, please contact [André](mailto:hello@vondertech.com).

Happy coding!

Project Link: [https://github.com/VonderTech/open-chatty](https://github.com/VonderTech/open-chatty)

[license_badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license_link]: https://opensource.org/licenses/MIT
