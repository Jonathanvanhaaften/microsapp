# amqps://slmvvoul:vJY_aB1QvNKnC49E0XrKHlgIM_DUvWEY@beaver.rmq.cloudamqp.com/slmvvoul
import pika
import json

params = pika.URLParameters(
    'amqps://slmvvoul:vJY_aB1QvNKnC49E0XrKHlgIM_DUvWEY@beaver.rmq.cloudamqp.com/slmvvoul')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='main',
                          body=json.dumps(body), properties=properties)
