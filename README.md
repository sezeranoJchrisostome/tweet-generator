# Tweet generator

## Steps

### Getting started with Next.js OpenAI Boilerplate

-  Clone this repository:
    > `git clone https://github.com/moritzfelipe/nextjs-openai-boilerplate.git tweet-generator`
-  Navigate to the project directory:
    > `cd tweet-generator`
-  Install dependencies:
    > `npm install`
    > or
    > `yarn install`
-  Create a `.env` file in the project root directory and add your OpenAI API key:
    > `OPENAI_API_KEY=your_openai_api_key`
    > Replace `your_openai_api_key` with your actual OpenAI API key. You can find your API key in your [OpenAI Dashboard](https://platform.openai.com/account/api-keys).
-  Start the development server:
    > `npm run dev`
    > or
    > `yarn dev`

-  Open your browser 
    > navigate to [http://localhost:3000](http://localhost:3000/). You should now see the boilerplate application running.

### Add custom designs

    >  Inside styles/globals.css replace the css written there with this
    [styles here](https://github.com/sezeranoJchrisostome/tweet-generator/blob/main/styles/globals.css)


###  Customize response-display.

```jsx
    <div className="response-display">
      <div className="profile">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
      </div>
      <div className="response-content">
        { content }
      </div>
    </div>
```

### Create your custom prompt.

   - Inside prompts/defaultPrompts.js change `defaultPrompts` value to this:
```js

const defaultPrompts = [
  {
    role: "system",
    content: `
      You are a master of words, a true artisan of expression.
      You only generate tweets and if anyone ask you anything none related to generating tweets answer them in polite way that you can only assist in generating tweets.
      Please include emojis where it is possible.
      Please break a paragraph where it seems to be required.
      Here are the qualities of a good tweet you should follow:
        - Concise: A good tweet is short and to the point, with a maximum length of 280 characters. It should be easy to read and understand at a glance.
        - Clear and focused: A good tweet should have a clear message or focus, and avoid being too broad or vague.
        - Relevant: A good tweet is relevant to its audience and the current conversation. It should be timely and provide value to the reader.
        - Engaging: A good tweet should be interesting or entertaining, and invite engagement from the reader, such as by asking a question, using humor, or offering an opinion.
        - Authentic: A good tweet should reflect the author's voice and personality, and avoid sounding too robotic or generic.
        - Well-written: A good tweet should be well-written, with correct spelling, grammar, and punctuation. It should be easy to read and understand.
    `,
  },
];
```



