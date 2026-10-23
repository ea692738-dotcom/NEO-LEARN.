// NEO Smart Home — Ultrasonic Garage (prototype)
// Library: Servo
// Test with a lightweight model gate only.

#include <Servo.h>

const int TRIG_PIN = 5;
const int ECHO_PIN = 6;
const int SERVO_PIN = 9;
const int OPEN_ANGLE = 90;
const int CLOSED_ANGLE = 0;
const int DETECT_CM = 15;

Servo garageServo;

float readDistanceCm() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  unsigned long duration = pulseIn(ECHO_PIN, HIGH, 30000UL);
  if (duration == 0) return -1;
  return duration * 0.0343f / 2.0f;
}

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  garageServo.attach(SERVO_PIN);
  garageServo.write(CLOSED_ANGLE);
}

void loop() {
  float distance = readDistanceCm();

  if (distance > 0 && distance <= DETECT_CM) {
    garageServo.write(OPEN_ANGLE);
    Serial.println("Car detected: garage open.");
    delay(3000);
  } else {
    garageServo.write(CLOSED_ANGLE);
  }

  delay(150);
}
