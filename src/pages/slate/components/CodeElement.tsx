const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export default CodeElement;

// Support customizing element with properties
// Then render the element based on the type and bind event handlers
// the event handler might be a way to detect the drop area
