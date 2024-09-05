import { NextResponse } from 'next/server';

export async function GET() {
  const userEmail = 'dipalokebiswas@gmail.com';
  const jiraToken = process.env.ATLASSION_API_KEY;
  const jiraUrl = 'https://collcetify.atlassian.net/rest/api/3/issue/COL-1';

  try {
    const response = await fetch(jiraUrl, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${userEmail}:${jiraToken}`).toString('base64'),
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch Jira issue' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching Jira issue:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
