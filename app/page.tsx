import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Thanks for Donating. Mint your PG!',
      target: 'https://mint.fun/base/0xDCD6baA15A17690F75f16f2344DA05A40268B90a',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
});

// const frameMetadata = getFrameMetadata({
//   buttons: [
//     {
//       label: 'Go back',
//     },
//     {
//       action: 'link',
//       label: 'Click to donate',
//       target: 'https://www.google.com',
//     },
//     {
//       label: 'Next project',
//       action: 'post_redirect',
//     },
//   ],
//   image: {
//     src: `${NEXT_PUBLIC_URL}/park-3.png`,
//     aspectRatio: '1:1',
//   },
//   input: {
//     text: 'Donate to your fave PGs',
//   },
//   postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
// });

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Frame PG :)</h1>
    </>
  );
}
