create extension if not exists "uuid-ossp"

CREATE TYPE ORDER_STATUS AS ENUM('OPEN', 'ORDERED');

CREATE TABLE carts (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	user_id uuid not null,
    created_at date not null,
    updated_at date not null,
    status ORDER_STATUS not null
);

CREATE TABLE cart_items (
	cart_id uuid, foreign key(cart_id) references carts(id),
	product_id uuid,
	count integer
);

insert into carts (user_id, created_at, updated_at, status) values
('2993b555-6570-4cf6-b78b-663a5e22340e', current_date, current_date, 'OPEN'),
('aedefda2-6cc9-4978-b76f-4610db95c616', current_date, current_date, 'ORDERED'),
('64acae5b-4a99-4ba7-923b-ab0c76daf9d5', current_date, current_date, 'OPEN');

insert into cart_items (cart_id, count) values
('cf4d6ec9-64fe-462f-9a7c-ca05b17e0ad1', 3),
('cf4d6ec9-64fe-462f-9a7c-ca05b17e0ad1', 1),
('cf4d6ec9-64fe-462f-9a7c-ca05b17e0ad1', 1),
('5d82989b-2486-4f87-a571-ef5ed2f59407', 10),
('5d82989b-2486-4f87-a571-ef5ed2f59407', 1),
('5d82989b-2486-4f87-a571-ef5ed2f59407', 1);