import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import sharp from 'sharp';
import { getProject, projects } from '@/lib/projects';

// Rendered once per project at build time and exported as /work/<slug>/og.jpg.
// JPEG rather than PNG/AVIF: smaller, and every social scraper reads it.
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const WIDTH = 1200;
const HEIGHT = 630;
const PHOTO_WIDTH = 720;

const font = (weight: 400 | 500) =>
  readFile(
    join(
      process.cwd(),
      `node_modules/@fontsource/dm-sans/files/dm-sans-latin-${weight}-normal.woff`
    )
  );

export async function GET(
  _: Request,
  { params }: RouteContext<'/work/[slug]/og.jpg'>
) {
  const project = getProject((await params).slug);
  if (!project) return new Response('Not found', { status: 404 });

  // Cover sources live outside public/ (see scripts/images.mjs)
  const source = join(process.cwd(), 'assets', project.cover.src);
  const photo = await sharp(source)
    .resize(PHOTO_WIDTH, HEIGHT, { fit: 'cover' })
    .jpeg({ quality: 80 })
    .toBuffer();

  const png = await new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#f8f7f5',
          color: '#1c1c1b',
          fontFamily: 'DM Sans',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori, not the DOM */}
        <img
          src={`data:image/jpeg;base64,${photo.toString('base64')}`}
          width={PHOTO_WIDTH}
          height={HEIGHT}
          alt=""
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            padding: 48,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 34,
              fontWeight: 500,
            }}
          >
            grain
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: 9,
                background: '#002fa7',
              }}
            />
            studio
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div
              style={{
                fontSize: 18,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: '#6f6f6c',
              }}
            >
              {`Selected work / ${project.number}`}
            </div>
            <div style={{ fontSize: 60, lineHeight: 1.05, fontWeight: 500 }}>
              {project.name}
            </div>
            <div
              style={{
                fontSize: 18,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: '#002fa7',
              }}
            >
              {`${project.category} · ${project.year}`}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        { name: 'DM Sans', data: await font(400), weight: 400 },
        { name: 'DM Sans', data: await font(500), weight: 500 },
      ],
    }
  ).arrayBuffer();

  const jpeg = await sharp(Buffer.from(png)).jpeg({ quality: 82 }).toBuffer();
  return new Response(new Uint8Array(jpeg), {
    headers: { 'Content-Type': 'image/jpeg' },
  });
}
