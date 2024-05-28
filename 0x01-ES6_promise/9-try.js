export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction(), 'Guardrail was processed');
  } catch (e) {
    queue.push(e.toString(), 'Guardrail was processed');
  }

  return queue;
}
