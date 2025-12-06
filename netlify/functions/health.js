exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      status: 'ok',
      hasApiKey: !!process.env.OPENAI_API_KEY,
      hasWorkflowId: !!process.env.CHATKIT_WORKFLOW_ID
    })
  };
};
