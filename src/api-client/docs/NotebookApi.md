# NoteTakerApi.NotebookApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiNotebookGet**](NotebookApi.md#apiNotebookGet) | **GET** /api/Notebook | Gets all entities.
[**apiNotebookIdDelete**](NotebookApi.md#apiNotebookIdDelete) | **DELETE** /api/Notebook/{id} | Deletes an entity by Id.
[**apiNotebookIdGet**](NotebookApi.md#apiNotebookIdGet) | **GET** /api/Notebook/{id} | Gets an entity by Id.
[**apiNotebookPost**](NotebookApi.md#apiNotebookPost) | **POST** /api/Notebook | Creates a new entity.



## apiNotebookGet

> [Notebook] apiNotebookGet()

Gets all entities.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.NotebookApi();
apiInstance.apiNotebookGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Notebook]**](Notebook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiNotebookIdDelete

> apiNotebookIdDelete(id)

Deletes an entity by Id.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.NotebookApi();
let id = 56; // Number | Entity Id.
apiInstance.apiNotebookIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Entity Id. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiNotebookIdGet

> Notebook apiNotebookIdGet(id)

Gets an entity by Id.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.NotebookApi();
let id = 56; // Number | Entity ID.
apiInstance.apiNotebookIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Entity ID. | 

### Return type

[**Notebook**](Notebook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiNotebookPost

> Notebook apiNotebookPost(opts)

Creates a new entity.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.NotebookApi();
let opts = {
  'notebook': new NoteTakerApi.Notebook() // Notebook | Entity to create.
};
apiInstance.apiNotebookPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notebook** | [**Notebook**](Notebook.md)| Entity to create. | [optional] 

### Return type

[**Notebook**](Notebook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

