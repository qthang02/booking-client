import { Button, Card, Col, Row } from 'antd';

import { useListCategories } from '../../query/catgories';

const { Meta } = Card;

const RoomList: React.FC = () => {
  const listCategories = useListCategories();


  return (
    <div>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>
          {listCategories.data?.categories.map((category) => (
            <Col span={8} key={category.ID}>
              <Card
                hoverable
                cover={
                  <img
                    alt={category.name}
                    src={category.image_link}
                    style={{ objectFit: 'cover', height: '300px' }}
                  />
                }
                style={{ marginBottom: '16px' }}
              >
                <Meta
                  title={category.name}
                  description={`Price: ${category.price} VND/1 day`}
                />
                <p>{category.description}</p>
                <Button>Đặt phòng</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RoomList;
