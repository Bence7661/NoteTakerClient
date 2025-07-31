# NoteTakerApi.NoteApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiNoteGet**](NoteApi.md#apiNoteGet) | **GET** /api/Note | Gets all entities.
[**apiNoteIdDelete**](NoteApi.md#apiNoteIdDelete) | **DELETE** /api/Note/{id} | Deletes an entity by Id.
[**apiNoteIdGet**](NoteApi.md#apiNoteIdGet) | **GET** /api/Note/{id} | Gets an entity by Id.
[**apiNotePost**](NoteApi.md#apiNotePost) | **POST** /api/Note | Creates a new entity.



## apiNoteGet

> [Note] apiNoteGet()

Gets all entities.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.NoteApi();
apiInstance.apiNoteGet((error, data, response) => {
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

[**[Note]**](Note.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiNoteIdDelete

> apiNoteIdDelete(id)

Deletes an entity by Id.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.NoteApi();
let id = 56; // Number | Entity Id.
apiInstance.apiNoteIdDelete(id, (error, data, response) => {
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


## apiNoteIdGet

> Note apiNoteIdGet(id)

Gets an entity by Id.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.NoteApi();
let id = 56; // Number | Entity ID.
apiInstance.apiNoteIdGet(id, (error, data, response) => {
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

[**Note**](Note.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiNotePost

> Note apiNotePost(opts)

Creates a new entity.

### Example

```javascript
import NoteTakerApi from 'note_taker_api';

let apiInstance = new NoteTakerApi.NoteApi();
let opts = {
  'note': new NoteTakerApi.Note() // Note | Entity to create.
};
apiInstance.apiNotePost(opts, (error, data, response) => {
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
 **note** | [**Note**](Note.md)| Entity to create. | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

