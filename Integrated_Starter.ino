// NEO Smart Home — Integrated Starter
// Starter only: room LED + PIR motion indicator + soil sensor + alert LED.
// This is intentionally kept simple before adding keypad/servos.

const int ROOM_LED_PIN = 2;
const int SECURITY_LED_PIN = 3;
const int PIR_PIN = 4;
const int SOIL_PIN = A4;
const int SOIL_DRY_THRESHOLD = 600; // Calibrate using your sensor readings.

void setup() {
  Serial.begin(9600);
  pinMode(ROOM_LED_PIN, OUTPUT);
  pinMode(SECURITY_LED_PIN, OUTPUT);
  pinMode(PIR_PIN, INPUT);
}

void loop() {
  int motion = digitalRead(PIR_PIN);
  int soilValue = analogRead(SOIL_PIN);

  // Demo: motion turns the room LED on.
  digitalWrite(ROOM_LED_PIN, motion ? HIGH : LOW);

  // Demo: alert LED lights when the soil reading crosses the calibrated threshold.
  digitalWrite(SECURITY_LED_PIN, soilValue > SOIL_DRY_THRESHOLD ? HIGH : LOW);

  Serial.print("Motion=");
  Serial.print(motion);
  Serial.print(" | Soil=");
  Serial.println(soilValue);

  delay(250);
}
