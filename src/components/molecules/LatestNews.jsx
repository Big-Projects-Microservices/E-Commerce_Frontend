import { Card, CardMedia } from "@mui/material";
import { SectionTitle } from "@atoms";
import { SkeletonLoader } from "@molecules";
import { useTranslation } from 'react-i18next';

const mockNews = [
  {
    name: "Fashion Industry",
    time: "01 Jan, 2015",
    artical:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha.figma.com/hub/file/6667455608/edd95fee-ad82-4ee9-8066-99b68abfbda8-cover.png",
  },
  {
    name: "Fashion Industry",
    time: "01 Jan, 2015",
    artical:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha.figma.com/hub/file/6667455608/edd95fee-ad82-4ee9-8066-99b68abfbda8-cover.png",
  },
  {
    name: "Fashion Industry",
    time: "01 Jan, 2015",
    artical:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha.figma.com/hub/file/6667455608/edd95fee-ad82-4ee9-8066-99b68abfbda8-cover.png",
  },
  {
    name: "Fashion Industry",
    time: "01 Jan, 2015",
    artical:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://s3-alpha.figma.com/hub/file/6667455608/edd95fee-ad82-4ee9-8066-99b68abfbda8-cover.png",
  },
];
export default function LatestNews() {
  const {t} = useTranslation()
  return (
    <section className="mt-6 ">
      {mockNews.length != 0 ? (
        <>
         <SectionTitle>{t('titles.latestNews')}</SectionTitle>
          <ul className="flex flex-wrap justify-center gap-2">
            {mockNews.map((news, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: 2,
                  display: "flex",
                  padding: 2,
                  boxShadow: "none",
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "flex", textAlign: "right" }}>
                  {news.time}
                </span>
                <li className="flex">
                  <CardMedia
                    component="img"
                    image={news.image}
                    sx={{ height: "120px", width: "100%", maxWidth: "100px" }}
                  />
                  <div className="m-3">
                    <b>
                      <p>{news.name}</p>
                    </b>
                    <p className="max-w-80">{news.artical}</p>
                  </div>
                </li>
              </Card>
            ))}
          </ul>
        </>
      ) : (
        <SkeletonLoader />
      )}
    </section>
  );
}
