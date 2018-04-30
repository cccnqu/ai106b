let data;
async function load() {
  data = new MnistData();
  await data.load();
}

async function train() {
  ui_isTraining();
  await model_train(data, ui_trainingLog);
}

async function test() {
  const testExamples = 50;
  const batch = data.nextTestBatch(testExamples);
  const predictions = model_predict(batch.xs);
  const labels = model_classesFromLabel(batch.labels);

  ui_showTestResults(batch, predictions, labels);
}

async function mnist() {
  await load();
  await train();
  test();
}
mnist();
