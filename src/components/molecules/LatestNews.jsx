import { Card, CardMedia } from "@mui/material";

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
  return (
    <section style={{ marginTop: "20px" }}>
      <ul style={{ display: "flex", flexWrap:'wrap', justifyContent:'center', gap:20 }}>
      {mockNews.map((news, index) => (
          <Card
          key={index}
            sx={{
              borderRadius: 2,
              display: "flex",
              padding: 2,
           
              boxShadow:'none'
            }}
          >
            <span style={{ display: "flex", textAlign: "right" }}>
              {news.time}
            </span>
            <li style={{ display: "flex" }}>
              <CardMedia
                component="img"
                image={news.image}
                sx={{ height: 120, width: "100%" }}
              />
              <div>
                <b>
                  <p>{news.name}</p>
                </b>
                <p style={{ maxWidth: "300px" }}>{news.artical}</p>
              </div>
            </li>
          </Card>
      ))}
      </ul>
    </section>
  );
}
