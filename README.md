# backend_osumare
backend Project
<h1>API Documentation</h1>
<h2>Overview</h2>
<p>This API allows users to manage a collection of tasks with basic CRUD operations. The tasks are stored in memory, and the API supports creating, reading, updating, and deleting tasks.</p>
<h2>Endpoints</h2>
<div>
	<h3>Retrieve all tasks</h3>
	<p><strong>URL:</strong> <code>/tasks</code></p>
	<p><strong>Method:</strong> <code>GET</code></p>
	<p><strong>Description:</strong> Retrieve a list of all tasks.</p>
	<div>
		<h4>Response:</h4>
		<p><strong>Status Code:</strong> <code>200 OK</code></p>
		<p><strong>Content-Type:</strong> <code>text/html</code></p>
		<p><strong>Body:</strong> Renders a list of tasks using the <code>index.ejs</code> view.</p>
	</div>
</div>
<div>
	<h3>Retrieve a specific task by ID</h3>
	<p><strong>URL:</strong> <code>/tasks/:id</code></p>
	<p><strong>Method:</strong> <code>GET</code></p>
	<p><strong>Description:</strong> Retrieve a specific task by its ID.</p>
	<p><strong>Parameters:</strong></p>
	<ul>
		<li><code>id</code> (required): ID of the task to retrieve.</li>
	</ul>
	<div>
		<h4>Response:</h4>
		<p><strong>Status Code:</strong> <code>200 OK</code></p>
		<p><strong>Content-Type:</strong> <code>text/html</code></p>
		<p><strong>Body:</strong> Renders the specific task using the <code>display.ejs</code> view.</p>
	</div>
</div>
<div>
	<h3>Create a new task</h3>
	<p><strong>URL:</strong> <code>/tasks</code></p>
	<p><strong>Method:</strong> <code>POST</code></p>
	<p><strong>Description:</strong> Create a new task.</p>
	<p><strong>Request Body:</strong></p>
	<pre><code>{
    "title": "New Task",
    "description": "Description for new task"
}</code></pre>
	<div>
		<h4>Response:</h4>
		<p><strong>Status Code:</strong> <code>302 Found</code> (Redirects to <code>/tasks</code>)</p>
		<p><strong>Body:</strong> Redirects to the list of tasks.</p>
	</div>
	<div>
		<h4>Error Response:</h4>
		<p><strong>Status Code:</strong> <code>400 Bad Request</code></p>
		<p><strong>Content-Type:</strong> <code>text/html</code></p>
		<p><strong>Body:</strong> Renders <code>missing-data.ejs</code> view if title or description is missing.</p>
	</div>
</div>
<div>
	<h3>Update an existing task by ID</h3>
	<p><strong>URL:</strong> <code>/tasks/:id</code></p>
	<p><strong>Method:</strong> <code>PUT</code></p>
	<p><strong>Description:</strong> Update an existing task by its ID.</p>
	<p><strong>Parameters:</strong></p>
	<ul>
		<li><code>id</code> (required): ID of the task to update.</li>
	</ul>
	<p><strong>Request Body:</strong></p>
	<pre><code>{
    "title": "Updated Task",
    "description": "Updated description for task"
}</code></pre>
	<div>
		<h4>Response:</h4>
		<p><strong>Status Code:</strong> <code>302 Found</code> (Redirects to <code>/tasks</code>)</p>
		<p><strong>Body:</strong> Redirects to the list of tasks.</p>
	</div>
	<div>
		<h4>Error Response:</h4>
		<p><strong>Status Code:</strong> <code>400 Bad Request</code></p>
		<p><strong>Content-Type:</strong> <code>text/html</code></p>
		<p><strong>Body:</strong> Renders <code>missing-data.ejs</code> view if title or description is missing.</p>
	</div>
</div>
<div>
	<h3>Delete a task by ID</h3>
	<p><strong>URL:</strong> <code>/tasks/:id</code></p>
	<p><strong>Method:</strong> <code>DELETE</code></p>
	<p><strong>Description:</strong> Delete a task by its ID.</p>
	<p><strong>Parameters:</strong></p>
	<ul>
		<li><code>id</code> (required): ID of the task to delete.</li>
	</ul>
	<div>
		<h4>Response:</h4>
		<p><strong>Status Code:</strong> <code>302 Found</code> (Redirects to <code>/tasks</code>)</p>
		<p><strong>Body:</strong> Redirects to the list of tasks.</p>
	</div>
</div>
<h2>Running the API Locally</h2>
<ol>
	<li>
		<strong>Install dependencies</strong>
		<pre><code>npm install express ejs method-override uuid</code></pre>
	</li>
	<li>
		<strong>Start the server</strong>
		<pre><code>node app.js</code></pre>
	</li>
	<li>
		<strong>Access the API</strong>
		<p>Open a web browser and go to <code>http://localhost:8080/tasks</code> to view the tasks.</p>
	</li>
</ol>
<h2>Example curl Commands</h2>
<div>
	<h3>Retrieve all tasks</h3>
	<pre><code>curl -X GET http://localhost:8080/tasks</code></pre>
</div>
<div>
	<h3>Retrieve a specific task by ID</h3>
	<pre><code>curl -X GET http://localhost:8080/tasks/&lt;task-id&gt;</code></pre>
</div>
<div>
	<h3>Create a new task</h3>
	<pre><code>curl -X POST http://localhost:8080/tasks -H "Content-Type: application/json" -d '{"title":"New Task","description":"Description for new task"}'</code></pre>
</div>
<div>
	<h3>Update an existing task by ID</h3>
	<pre><code>curl -X PUT http://localhost:8080/tasks/&lt;task-id&gt; -H "Content-Type: application/json" -d '{"title":"Updated Task","description":"Updated description for task"}'</code></pre>
</div>
<div>
	<h3>Delete a task by ID</h3>
	<pre><code>curl -X DELETE http://localhost:8080/tasks/&lt;task-id&gt;</code></pre>
</div>

